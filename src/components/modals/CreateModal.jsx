import {Button, Label, Modal, ModalBody, ModalHeader, TextInput} from "flowbite-react";
import {useEffect, useRef, useState} from "react";

export default function CreateModal({open , onClose , onSubmit , labels}) {

    const inputRef = useRef(null);
    const [isValidInput , setIsValidInput] = useState(true)

    const handleClickSubmitButton = () => {
        const text = inputRef.current.value;
        if ( !text || text.trim().length <  3) {
            //console.log("Input value: " , text);
            setIsValidInput(false);
        } else {
            onSubmit(text);
        }


        // onClose
    }

    return (
        <>
            {/*<Button onClick={() => setOpenModal(true)}>Toggle modal</Button>*/}
            <Modal show={open} size="md" popup onClose={onClose} initialFocus={null}>
                <ModalHeader />
                <ModalBody>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">{ labels?.header }</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name">{labels?.text_label}</Label>
                            </div>
                            <TextInput id="name"  ref={inputRef}  placeholder="نام مورد نظر خود را وارد نمایید" required />

                            {isValidInput === false ?
                                <label className="text-red-500">
                                    {"نام وارد شده صحیح نمی باشد"}
                                </label> : ""
                            }


                        </div>

                        <div className="w-full">
                            <Button onClick={handleClickSubmitButton}>{labels?.button_label}</Button>
                        </div>

                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}