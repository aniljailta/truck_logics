import CommonButton from '@/components/CommonButton/CommonButton';
import {ScrollView, View} from 'react-native';
import CheckCallsListCard from '../../Cards/CheckCallsAndDocsListCard/CheckCallsAndDocsListCard';
import styles from './Styles';
import {appMargins} from '@/constants/Styles';

const DocsListScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
      <View style={styles.container}>
        <CheckCallsListCard
          docName="Document Name"
          docDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
          isDoc={true}
        />
        <CheckCallsListCard
          docName="Document Name"
          docDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
          isDoc={true}
        />
        <CheckCallsListCard
          docName="Document Name"
          docDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
          isDoc={true}
        />

        <View
          style={{
            marginTop: appMargins.MARGIN_50,
          }}>
          <CommonButton
            title={'Upload Document'}
            onPress={() => {}}
            isLoading={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default DocsListScreen;
