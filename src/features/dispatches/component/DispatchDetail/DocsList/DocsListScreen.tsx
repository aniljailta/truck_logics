import React, {useState} from 'react';
import {ScrollView, View, Alert} from 'react-native';
import CommonButton from '@/components/CommonButton/CommonButton';
import CheckCallsListCard from '../../Cards/CheckCallsAndDocsListCard/CheckCallsAndDocsListCard';
import styles from './Styles';
import {appMargins} from '@/constants/Styles';
import UploadDocumentDialog from './UploadDoc/UploadDocDialog';

const DocsListScreen = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [documents, setDocuments] = useState([
    {
      docName: 'Document Name',
      docDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      docName: 'Document Name',
      docDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      docName: 'Document Name',
      docDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ]);

  const handleOpenDialog = () => setIsDialogVisible(true);
  const handleCloseDialog = () => setIsDialogVisible(false);

  const handleUploadSuccess = (fileName: string, description: string) => {
    setDocuments(prevDocs => [
      ...prevDocs,
      {docName: fileName, docDescription: description},
    ]);
    Alert.alert('Success', `${fileName} uploaded successfully!`);
  };

  const handleUploadError = (error: Error) => {
    console.error('Upload failed:', error);
    Alert.alert('Error', 'Upload failed. Please try again.');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
      <View style={styles.container}>
        {documents.map((doc, index) => (
          <CheckCallsListCard
            key={index}
            docName={doc.docName}
            docDescription={doc.docDescription}
            isDoc={true}
          />
        ))}

        <View style={{marginTop: appMargins.MARGIN_50}}>
          <CommonButton
            title={'Upload Document'}
            onPress={handleOpenDialog}
            isLoading={false}
          />
        </View>
      </View>

      <UploadDocumentDialog
        isVisible={isDialogVisible}
        onClose={handleCloseDialog}
        onUploadSuccess={handleUploadSuccess}
        onUploadError={handleUploadError}
      />
    </ScrollView>
  );
};

export default DocsListScreen;
