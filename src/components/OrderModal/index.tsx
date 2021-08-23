import { MdClose } from 'react-icons/md'
import Modal from 'react-modal'

import * as S from './styles'

interface OrderModalProps {
  isOpen: boolean
  onRequestClose: () => void
  cashBack: string
}

const OrderModal = ({ isOpen, onRequestClose, cashBack }: OrderModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.ModalCloseButton type="button" onClick={onRequestClose}>
        <MdClose size={20} />
      </S.ModalCloseButton>

      <S.ModalContent>
        <S.ModalTitle>Parabéns</S.ModalTitle>
        <S.ModalDescription>Você ganhou de volta</S.ModalDescription>
        <S.ModalCashback>{cashBack}</S.ModalCashback>
      </S.ModalContent>
    </Modal>
  )
}

export default OrderModal
