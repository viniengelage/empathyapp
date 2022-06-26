import React, { useCallback, useEffect, useRef, useState } from 'react';

import { IconTitle } from 'components/IconTitle';
import { View } from 'react-native';
import { Button } from 'components/Buttons/Default';
import { api } from 'services/api';
import { Checkbox, ICheckboxOptionsProps } from 'components/Inputs/Checkbox';
import { ICategoryProps } from 'types/category';
import { Form } from 'global/styles/global';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CloseContainer, CloseIcon, Container } from './styles';

type Step4ScreenProp = StackNavigationProp<any, 'Step4'>;

interface IProps {
  onFinish(): void;
  close(): void;
}

export function ChangePreferences({ onFinish, close }: IProps) {
  const formRef = useRef<FormHandles>(null);

  const { navigate } = useNavigation<Step4ScreenProp>();

  const [categories, setCategories] = useState<ICategoryProps[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    api.get('/activities/categories').then(({ data }) => setCategories(data));
  }, [categories]);

  const handleSubmit = useCallback(
    data => {
      navigate('Step5', {
        activities_categories_id: data.options,
      });
    },
    [navigate],
  );

  const handleGetCategoriesOptions = useCallback(() => {
    const options: ICheckboxOptionsProps[] = [];

    if (categories.length > 0) {
      categories.map(category =>
        options.push({
          id: category.id,
          placeholder: category.name,
          icon: category.icon_url,
        }),
      );
    }

    return options;
  }, [categories]);

  return (
    <Container>
      <CloseContainer onPress={() => close()}>
        <CloseIcon name="close-outline" />
      </CloseContainer>
      <IconTitle
        title="O que você costuma fazer no seu tempo livre?"
        icon="bulb-outline"
      />

      <Form onSubmit={handleSubmit} ref={formRef}>
        <Checkbox
          name="options"
          options={handleGetCategoriesOptions()}
          isFilled={isFilled => setIsActive(isFilled)}
        />
      </Form>

      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'flex-end',
          marginBottom: 60,
        }}
      >
        <Button
          title="Atualizar Gostos"
          isActive={isActive}
          onPress={() => formRef.current?.submitForm()}
        />
      </View>
    </Container>
  );
}
