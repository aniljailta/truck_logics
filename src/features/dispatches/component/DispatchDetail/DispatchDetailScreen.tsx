import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import Header from '@/components/Header/Header';
import ImageView from '@/components/ImageView/ImageView';
import CustomTabBar from './Common/CustomTabbar';
import styles from './Styles';
import SummaryScreen from './Summary/SummaryScreen';
import CheckAllCallsScreen from './CheckCallsList/CheckAllCallsScreen';
import DocsListScreen from './DocsList/DocsListScreen';
import NotesListScreen from './NotesList/NotesListScreen';
import {useAppDispatch, useAppSelector} from '@/hooks/ReduxHooks';
import {dispatchDetailByIdRequest} from '../../slice';
import {DispatchStackParamList} from '@/navigation/dispatch/DispatchStack';

type DispatchDetailScreenRouteProp = RouteProp<
  DispatchStackParamList,
  'DispatchDetailScreen'
>;

type Props = {
  route: DispatchDetailScreenRouteProp;
};

const DispatchDetailScreen: React.FC<Props> = ({route}) => {
  const {id} = route.params;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(dispatchDetailByIdRequest(id));
  }, [dispatch, id]);

  const [activeTab, setActiveTab] = useState('summary');
  const renderScreen = () => {
    switch (activeTab) {
      case 'summary':
        return <SummaryScreen />;
      case 'checkCall':
        return <CheckAllCallsScreen />;
      case 'docs':
        return <DocsListScreen />;
      case 'notes':
        return <NotesListScreen />;
      default:
        return <></>;
    }
  };

  return (
    <ImageView>
      <View style={styles.wrapper}>
        <Header headerText="DIS-10044" />
        <CustomTabBar activeTab={activeTab} onChangeTab={setActiveTab} />
        {renderScreen()}
      </View>
    </ImageView>
  );
};

export default DispatchDetailScreen;
