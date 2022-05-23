import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IconTitle } from 'components/IconTitle';
import { StackScreenProps } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { api } from 'services/api';
import qs from 'qs';
import { IActivityProps } from 'types/activity';
import { Form } from 'styles/global';
import { Button } from 'components/Buttons/Default';
import { Checkbox, ICheckboxOptionsProps } from 'components/Inputs/Checkbox';
import { FormHandles } from '@unform/core';
import { View } from 'react-native';
import { Container } from '../styles';

interface IParamsProps {
  activities_categories_id: string[];
}

export function Step5({
  navigation,
  route,
}: StackScreenProps<ParamListBase, 'Step5'>) {
  const formRef = useRef<FormHandles>(null);

  const [activities, setActivities] = useState<IActivityProps[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (route.params) {
      const { activities_categories_id } = route.params as IParamsProps;

      api
        .get('/activities', {
          params: {
            activity_category_id: activities_categories_id,
          },
          paramsSerializer: params =>
            qs.stringify(params, { arrayFormat: 'repeat' }),
        })
        .then(({ data }) => setActivities(data));
    }
  }, [route]);

  const handleGetActivitiesOptions = useCallback(() => {
    const options: ICheckboxOptionsProps[] = [];

    if (activities.length > 0) {
      activities.map(activity =>
        options.push({
          id: activity.id,
          icon: activity.icon_url,
          placeholder: activity.name,
        }),
      );
    }

    return options;
  }, [activities]);

  const handleSubmit = useCallback(
    async data => {
      setLoading(true);

      try {
        await api.patch('/users/me/activities', data);

        setLoading(false);

        navigation.navigate('Step6');
      } catch (error) {
        setLoading(false);
      }
    },
    [navigation],
  );

  return (
    <Container>
      <IconTitle
        title="Qual mídia você gosta de consumir?"
        icon="book-outline"
      />

      <Form onSubmit={handleSubmit} ref={formRef}>
        <Checkbox
          name="activities_id"
          options={handleGetActivitiesOptions()}
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
          title="Continuar"
          isActive={isActive}
          loading={loading}
          onPress={() => formRef.current?.submitForm()}
        />
      </View>
    </Container>
  );
}
