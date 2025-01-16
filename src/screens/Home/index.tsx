import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';
import { HeaderUser } from '../../components/HeaderUser';
import { useTheme } from '../../context/ThemeProvider';
import { marksRequest } from '../../api/home';
import { FlatList } from 'react-native';
import Input from '../../components/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  Body,
  Container,
  FormGroup,
  MarkTitleBody,
  WelcomeText
} from './styled';
import ItemList from '../../components/ItemList';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '../../routes/app.routes';
import PayLoad from '../../components/Payload';

export type MarkType = {
  codigo: string;
  nome: string;
};

interface FormData {
  search?: string;
}

const validationSchema = yup.object({
  search: yup.string(),
});

const Home: React.FC = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const { theme } = useTheme();
  const { user } = useAuth();
  const [collection, setCollection] = useState<MarkType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMarks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await marksRequest();
      setCollection(response);
    } catch (error) {
      console.error('Failed to fetch marks:', error);
    }  finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMarks();
  }, [fetchMarks]);

  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    defaultValues: { search: '' },
    resolver: yupResolver(validationSchema),
  });

  const handleSearch = useCallback(
    (data: FormData) => {
      const searchValue = data.search?.trim().toLowerCase() || '';

      if (!searchValue) {
        fetchMarks();
        return;
      }

      const filteredMarks = collection.filter(mark =>
        mark.nome.toLowerCase().includes(searchValue)
      );

      setCollection(filteredMarks);
    },
    [collection, fetchMarks]
  );

  const handleGoModel = (item: MarkType) => {
    navigation.navigate('Model', item);
  }

  if(loading) {
    return <PayLoad />
  } else {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <Container>
        <HeaderUser />
        <WelcomeText>Olá {user.name}, bom dia!</WelcomeText>

        <Body>
          <MarkTitleBody>Marcas disponíveis</MarkTitleBody>

          <FormGroup>
            <Input
              name="search"
              control={control}
              placeholder="Pesquise por uma marca aqui"
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
                onPress={() => handleGoModel(item)}
                activeOpacity={0.8}
              />
            )}
            ListEmptyComponent={<WelcomeText>Nenhuma marca encontrada.</WelcomeText>}
          />
        </Body>
      </Container>
    </SafeAreaView>
  );
  }
};

export default Home;