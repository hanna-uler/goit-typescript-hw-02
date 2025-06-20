import css from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { Toaster } from 'react-hot-toast';
import ImageGallery from '../ImageGallery/ImageGallery';
import { useState, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import fetchPictures from '../../pictures-api';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import NoResultsMessage from '../NoResultsMessage/NoResultsMessage';
import Modal from 'react-modal'; 

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    inset: 'unset',
    background: 'transparent',
    border: 'none',
    padding: '12px',
    backgroundColor: '#fafafa',
    },
}

export default function App() {
  const [pictures, setPictures] = useState<Img[]>([] as Img[]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imgCaption, setImgCaption] = useState<string | null> (null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  Modal.setAppElement('#root');

  const onSearchSubmit = async (searchQuery: string) => {
    setPictures([]);
    setPage(1);
    setQuery(searchQuery);
  }
  
  const incrementPage = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    if (query === "") {
      return;
    }
    const upgradeGallery = async () => {
      try {
        setError(false);
        setLoading(true);
        setTotalPages(1);
        const data = await fetchPictures(query, page);
        const newPicArray = data.results;
        setTotalPages(data.total_pages);
        setPictures((prevPicArray) => [...prevPicArray, ...newPicArray]);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    upgradeGallery();
  }, [query, page]);
  
  const openModal = (imageUrl: string, imageDescr: string) => {
    setSelectedImage(imageUrl);
    setImgCaption(imageDescr);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setImgCaption(null);
  };
  
  return (
    <div className={css.container}> 
      <SearchBar onSubmit={onSearchSubmit}/>
      {isError && <ErrorMessage/>}
      {pictures.length > 0 && <ImageGallery picsArray={pictures} onImageClick={openModal} />}
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {pictures.length > 0 && totalPages > page && !isLoading && <LoadMoreBtn turnPage={incrementPage} />}
      {totalPages === 0 && <NoResultsMessage/> }
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Preview"
        style={customStyles}
      >
        {selectedImage && (
          <div>
            <img
              src={selectedImage}
              alt={imgCaption}
              style={{ maxWidth: '90vh', maxHeight: '90vh', borderRadius: '8px' }}
            />
            <p className={css.modalImgCapture}>{imgCaption}</p>
          </div>
        )}
      </Modal>  
    </div>
  )
}