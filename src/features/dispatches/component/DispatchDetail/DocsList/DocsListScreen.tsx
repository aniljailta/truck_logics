import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Alert,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CommonButton from '@/components/CommonButton/CommonButton';
import CheckCallsListCard from '../../Cards/CheckCallsAndDocsListCard/CheckCallsAndDocsListCard';
import styles from './Styles';
import {appGap, appMargins} from '@/constants/Styles';
import UploadDocumentDialog from './UploadDoc/UploadDocDialog';
import {useAppDispatch, useAppSelector} from '@/hooks/ReduxHooks';
import { uploadDocumentRequest } from '@/features/dispatches/slice';

const DocsListScreen = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const dispatch = useAppDispatch()

  const handleOpenDialog = () => setIsDialogVisible(true);
  const handleCloseDialog = () => setIsDialogVisible(false);

  const handleUploadSuccess = (fileName: string, description: string, fileUri: string, fileType: string | null) => {
    console.log('file uri', fileName, description, fileUri);
    const formData = new FormData();
    formData.append('doc', {
        uri: fileUri,
        name: fileName,
        type: fileType,
        description: description
    });
    formData.append('ftl_dispatch_id', 40);
    dispatch(uploadDocumentRequest(formData))
    // setDocuments(prevDocs => [
    //   ...prevDocs,
    //   {docName: fileName, docDescription: description},
    // ]);
    Alert.alert('Success', `${fileName} uploaded successfully!`);
  };

  const handleUploadError = (error: Error) => {
    console.error('Upload failed:', error);
    Alert.alert('Error', 'Upload failed. Please try again.');
  };
  const {dispatchesDetail, isUploading} = useAppSelector(
    state => state.dispatch,
  );
  return (
    <>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dispatchesDetail?.assets}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          ItemSeparatorComponent={() => <View style={{height: appGap.gap_20}} />}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => {}}>
                <CheckCallsListCard
                  docName={item.name}
                  docDescription={item.desc}
                  isDoc={true}
                />
              </TouchableOpacity>
            );
          }}
        />

        <View>
          <CommonButton
            title={'Upload Document'}
            onPress={handleOpenDialog}
            isLoading={isUploading}
          />
        </View>
      </View>
      <UploadDocumentDialog
        isVisible={isDialogVisible}
        onClose={handleCloseDialog}
        onUploadSuccess={handleUploadSuccess}
        onUploadError={handleUploadError}
      />
    </>
  );
};

export default DocsListScreen;
