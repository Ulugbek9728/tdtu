import React from 'react';
import {Modal, ButtonToolbar, Button, Schema} from 'rsuite';
import {Form, Input} from 'rsuite';

import {useTranslation} from "react-i18next";
import sendSpellingMistake from "@/utils/spellMistake";

const {StringType} = Schema.Types;

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref}/>);

const model = Schema.Model({
    'correct-text': StringType().isRequired('Bu katakcha to‘ldirilishi shart')
});

function SpellingMistakeFormModal({open, handleClose, data}) {
    const {t} = useTranslation();
    const formRef = React.useRef();
    const [formError, setFormError] = React.useState({});
    const [formValue, setFormValue] = React.useState({
        'correct-text': '',
        'mistake-text': data?.mistakeText || ''
    });
    const onSubmit = () => {
        console.log('asdasdsad')
        formRef
            .current
            .checkAsync()
            .then(result => {
                if (!result?.hasError) {
                    console.log(data)
                    sendSpellingMistake({...data, correctText: formValue["correct-text"]})
                }
            });
    }
    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>{t('spell.modal.title')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form ref={formRef}
                          onChange={setFormValue}
                          onCheck={setFormError}
                          formValue={formValue}
                          fluid
                          model={model}
                          onSubmit={onSubmit}
                    >
                        <Form.Group controlId="mistake-text">
                            <Form.ControlLabel>Xatolik aniqlangan matn</Form.ControlLabel>
                            <Form.Control rows={4} name="mistake-text" accepter={Textarea} value={data?.mistakeText} disabled={true}/>
                            {/*<Form.HelpText>Username is required</Form.HelpText>*/}
                        </Form.Group>
                        <Form.Group controlId="correct-text">
                            <Form.ControlLabel>Iltimos, to‘g‘ri matnni kiriting</Form.ControlLabel>
                            <Form.Control name="correct-text" rows={4} accepter={Textarea} value={data?.correctText}
                                          placeholder={"To'g'ri matinni kiriting.."}/>
                        </Form.Group>
                        <ButtonToolbar style={{justifyContent: 'flex-end'}}>
                            <Button appearance="primary" type="submit"
                                    onClick={onSubmit}>{t('spell.modal.button.ok')}</Button>
                            <Button appearance="default"
                                    onClick={handleClose}>{t('spell.modal.button.cancel')}</Button>
                        </ButtonToolbar>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default SpellingMistakeFormModal;