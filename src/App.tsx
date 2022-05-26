import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
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

      <Modal
        isOpen={isNewTransactionalModalOpen}
        onRequestClose={handleCloseNewTransactionalModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
    </>
  );
}