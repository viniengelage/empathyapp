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

import { CloseContainer, CloseIcon, Container, Description } from './styles';

interface IProps {
  onFinish(): void;
  close(): void;
}
export function ChangePassword({ onFinish, close }: IProps) {

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
        title="Alterar Senha"
        icon="code-working-outline"
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
            <Description>Digite sua senha atual.</Description>
            <Input
                name="current-password"
                icon="lock-open-outline"
                placeholder="************"
                editable={isEditable}
            />
            
            <Description>Digite sua nova senha.</Description>
            <Input
                name="current-password"
                icon="lock-open-outline"
                placeholder="************"
                editable={isEditable}
            />
             <Input
                name="current-password"
                icon="lock-open-outline"
                placeholder="************"
                editable={isEditable}
            />
        </Form>

        <Button
        title={isEditable ? 'Salvar' : 'Atualizar Senha'}
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