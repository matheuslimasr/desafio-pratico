import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../context/ThemeProvider';
import { Alert, FlatList } from 'react-native';
import Input from '../../components/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ItemList from '../../components/ItemList';
import { useRoute } from '@react-navigation/native';
import { modelsRequest } from '../../api/model';

import {
  Body,
  Container,
  FormGroup,
  WelcomeText
} from './styled';
import PayLoad from '../../components/Payload';


export type ModelType = {
  codigo: string;
  nome: string;
};

interface FormData {
  search?: string;
}

const validationSchema = yup.object({
  search: yup.string(),
});

const Model: React.FC = () => {

  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const item = route.params as ModelType;

  const { theme } = useTheme();
  const [collection, setCollection] = useState<ModelType[]>([]);

  const fetchModels = useCallback(async () => {
    setLoading(true); 

    try {
      const response = await modelsRequest(item.codigo);
      setCollection(response.modelos);
    } catch (error) {
      console.error('Failed to fetch Models:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchModels();
  }, [fetchModels]);

  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    defaultValues: { search: '' },
    resolver: yupResolver(validationSchema),
  });

  const handleSearch = useCallback(
    (data: FormData) => {
      const searchValue = data.search?.trim().toLowerCase() || '';

      if (!searchValue) {
        fetchModels();
        return;
      }

      const filteredMarks = collection.filter(model =>
        model.nome.toLowerCase().includes(searchValue)
      );

      setCollection(filteredMarks);
    },
    [collection, fetchModels]
  );

  if(loading) {
    return <PayLoad />
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <Container>
        
        <WelcomeText>Veja os modelos disponíveis da marca {item.nome}</WelcomeText>

        <Body>
          <FormGroup>
            <Input
              name="search"
              control={control}
              placeholder="Pesquise por um modelo aqui"
              keyboardType="default"
              onChange={handleSubmit(handleSearch)}
            />
          </FormGroup>

          <FlatList
            data={collection}
            keyExtractor={item => item.codigo}
            renderItem={({ item }) => (
              <ItemList
                item={item}
                onPress={() => Alert.alert("Modelo Selecionado",item.nome)}
                activeOpacity={0.8}
              />
            )}
            ListEmptyComponent={<WelcomeText>Nenhum modelo encontrada.</WelcomeText>}
          />
        </Body>
      </Container>
    </SafeAreaView>
  );
};

export default Model;