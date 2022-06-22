import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionalModal } from "./components/NewTransactionalModal";
import { TransactionsProvider } from "./hooks/useTransactions";
import { GlobalStyle } from "./styles/Global";

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
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionalModal={handleOpenNewTransactionalModal} />
      <Dashboard />
      <NewTransactionalModal isOpen={isNewTransactionalModalOpen} onRequestClose={handleCloseNewTransactionalModal} />
    </TransactionsProvider>
  );
}