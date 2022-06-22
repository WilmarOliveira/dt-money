import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { useTransactions } from "../../hooks/useTransactions";
import { FormContainer, RadioBox, TransactionTypeContainer } from "./styles";

interface NewTransactionalModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewTransactionalModal = ({ isOpen, onRequestClose }: NewTransactionalModalProps) => {
    const { createTransaction } = useTransactions()

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState('deposit')
    const [category, setCategory] = useState('')

    const handleCreateNewTransaction = async (event: FormEvent) => {
        event.preventDefault();

        await createTransaction(
            {
                title,
                amount,
                type,
                category
            }
        )

        setTitle('');
        setAmount(0);
        setType('deposit');
        setCategory('');

        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-model-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar Modal" />
            </button>
            <FormContainer onSubmit={handleCreateNewTransaction} >
                <h2>Cadastrar Transação</h2>
                <input
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={income} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcome} alt="Saída" />
                        <span>Entrada</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </FormContainer>
        </Modal>
    )
}