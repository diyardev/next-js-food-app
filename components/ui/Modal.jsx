import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  button,
} from "@nextui-org/react";

export default function Modalui({
  isModalOpen,
  onCloseModal,
  title,
  content,
  onConfirm,
  onDiscard,
  buttons,
}) {

  return (
    <>
      <Modal
      key={1}
        size="lg"
        className="dark  text-white"
        backdrop="blur"
        isOpen={isModalOpen}
        onClose={onCloseModal}
      >
        <ModalContent>
          {(onCloseModal) => (
            <>
              <ModalHeader className={`flex flex-col gap-1 ${title.classes}`}>
                {title.text}
              </ModalHeader>
              <ModalBody>{content}</ModalBody>
              <ModalFooter>
                {buttons.map((button,index) => (
                  <Button key={index} onPress={button.toClose && onCloseModal } color={button.color} variant={button.variant}>{button.label}</Button>
                ))}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
