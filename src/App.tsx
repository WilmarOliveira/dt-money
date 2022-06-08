import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionalModal } from "./components/NewTransactionalModal";
import { GlobalStyle } from "./styles/Global"

Modal.setAppElement('#root');

export const App = () => {
  const [isNewTransactionalModalOpen, setIsNewTransactionalModalOpen] = useState<boolean>(false)

  const handleOpenNewTransactionalModal = () => {
    setIsNewTransactionalModalOpen(true);
  }

  const handleCloseNewTransactionalModal = () => {
    setIsNewTransactionalModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionalModal={handleOpenNewTransactionalModal} />
      <Dashboard />
      <NewTransactionalModal isOpen={isNewTransactionalModalOpen} onRequestClose={handleCloseNewTransactionalModal} />
    </>
  );
}