"use client"
import { FaWindowClose } from 'react-icons/fa';

const Modal = ({ content, title, isFloating, buttonText, openModal, setOpenModal }: any) => {



    const handleModal = () => {
        setOpenModal(!openModal)
    }
    const closeModal = () => {
        setOpenModal(false)
    }

    return (
        <>
            <button
                className={`text-blue-500 ${isFloating && 'fixed bottom-20 right-20'}`}
                onClick={handleModal}>
                {buttonText}
            </button>
            {openModal && (
                <>
                    <div className=" absolute border-2 bg-red-600 z-1">
                        <div className="flex justify-between p-5">
                            {title}
                            <FaWindowClose onClick={closeModal} />
                        </div>
                        <div className="modalContent">
                            {content}
                        </div>
                    </div>
                    <div className='border-2 absolute w-full h-full justify-center items-center flex top-0'
                        style={{
                            // border: '1px solid red',
                            // position: 'absolute',
                            // width: '100%',
                            // height: '100vh',
                            // justifyContent: 'center',
                            // alignItems: 'center',
                            // display: 'flex',
                            // top: 0,
                            // background: 'grey',
                            // opacity: 0.5
                        }}
                        onClick={closeModal}
                    /></>)
            }
        </>
    )
}

export default Modal