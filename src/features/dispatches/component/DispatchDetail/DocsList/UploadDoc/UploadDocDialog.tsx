import AddIcon from '@/assets/svg/AddIcon';
import CloseIcon from '@/assets/svg/CloseIcon';
import appColor from '@/constants/Colors';
import React, {useState} from 'react';
import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './Styles';

type Props = {
  isVisible: boolean;
  onClose: () => void;
  onUploadSuccess: (fileName: string, description: string) => void;
  onUploadError: (error: Error) => void;
};

const UploadDocumentDialog: React.FC<Props> = ({
  isVisible,
  onClose,
  onUploadSuccess,
  onUploadError,
}) => {
  const [fileName, setFileName] = useState('');
  const [description, setDescription] = useState('');

  const handleClose = () => {
    setFileName('');
    setDescription('');
    onClose();
  };

  const handleUpload = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      onUploadSuccess(fileName, description);
      handleClose();
    } catch (error) {
      onUploadError(
        error instanceof Error ? error : new Error('Unknown error occurred'),
      );
    }
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.title}>Upload Document</Text>

            <TouchableOpacity onPress={handleClose}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.divider}></View>
          <Text style={styles.label}>Filename</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter File Name"
            placeholderTextColor={appColor.APP_GREY}
            value={fileName}
            onChangeText={setFileName}
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter Description"
            placeholderTextColor={appColor.APP_GREY}
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />

          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: appColor.APP_ORANGE_COLOR},
            ]}>
            <View style={styles.row}>
              <AddIcon />
              <Text style={styles.buttonText}>Select File</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: appColor.BUTTON_PRIMARY_COLOR},
            ]}
            onPress={handleUpload}
            disabled={!fileName.trim()}>
            <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default UploadDocumentDialog;
