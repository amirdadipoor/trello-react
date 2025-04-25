import {Button, Label, Modal, ModalBody, ModalHeader, TextInput} from "flowbite-react";
import {useRef, useState} from "react";

export default function CreateModal() {
        const [openModal, setOpenModal] = useState(true);
        // const emailInputRef = useRef>(null);

        return (
            <>
                {/*<Button onClick={() => setOpenModal(true)}>Toggle modal</Button>*/}
                <Modal show={openModal} size="md" popup onClose={false} initialFocus={null}>
                    <ModalHeader />
                    <ModalBody>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name">Your name</Label>
                                </div>
                                <TextInput id="name" ref={null} placeholder="" required />
                            </div>

                            <div className="w-full">
                                <Button>Log in to your account</Button>
                            </div>

                        </div>
                    </ModalBody>
                </Modal>
            </>
        )
}