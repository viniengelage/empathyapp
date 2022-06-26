import { FormHandles } from '@unform/core';
import { Button } from 'components/Buttons/Default';
import { IconTitle } from 'components/IconTitle';
import { Input } from 'components/Inputs/Default';
import { Mask } from 'components/Inputs/Mask';
import { Form } from 'global/styles/global';
import { useAuth } from 'hooks/auth';
import React, { useCallback, useRef, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { api } from 'services/api';

import { CloseContainer, CloseIcon, Container } from './styles';

interface IProps {
  onFinish(): void;
  close(): void;
}
export function RegistrationData({ onFinish, close }: IProps) {

    const formRef = useRef<FormHandles>(null);

    const { user, getUser } = useAuth();

    const [loading, setLoading] = useState<boolean>(false);
    const [isEditable, setIsEditable] = useState<boolean>(false);

    const handleSubmit = useCallback(
        async data => {
        setLoading(true);

        try {
            await api.put('/users', {
            ...data,
            });

            await getUser();

            setLoading(false);

            //onFinish();
        } catch (error) {
            setLoading(false);
        }
        },
        [getUser, onFinish],
    );

    const handleNameFocus = () => {
        formRef.current?.getFieldRef('name').focus();
    };
    
  return (
    <Container>
        <CloseContainer onPress={() => close()}>
            <CloseIcon name="close-outline" />
        </CloseContainer>

        <IconTitle
        title="Dados de cadastro"
        icon="lock-closed-outline"
        style={{
            paddingTop: RFValue(16),
        }}
        />

        <Form
        onSubmit={handleSubmit}
        ref={formRef}
        initialData={{
            name: user.name,
            genre: user.genre,
        }}
        >
            <Input
                name="email"
                icon="person-outline"
                placeholder="seuemail@email.com"
                editable={isEditable}
            />
            <Input
                name="cellphone"
                icon="call-outline"
                placeholder="(45) 9 9999-9999"
                editable={isEditable}
            />
        </Form>

        <Button
        title={isEditable ? 'Salvar' : 'Editar'}
        loading={loading}
        style={{ marginBottom: 32 }}
        onPress={() => {
            if (isEditable) {
            formRef.current?.submitForm();
            } else {
            setIsEditable(true);
            handleNameFocus();
            }
        }}
        />
    </Container>
    );
}