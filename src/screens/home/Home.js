import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as userActions from '../../store/actions/Actions';
import { Search } from '../../components/Search';

const Home = props => {
  const [error, setError] = useState();
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState('');
  const state = useSelector(state => state.paginationReducer);
  const dispatch = useDispatch();

  const loadUser = useCallback(async () => {
    setError(null);
    try {
      dispatch(userActions.fetchUser(state.page + 1));
    } catch (err) {
      setError(err.message);
    }
  }, [dispatch, setError]);

  useEffect(() => {
     loadUser();
  }, []);

  const refreshUser = useCallback(async () => {
    setError(null);
    setRefresh(true);
    try {
      dispatch(userActions.fetchRefreshUser());
    } catch (err) {
      setError(err.message);
    }
    setRefresh(false);
  }, [dispatch, setError, setRefresh]);

  const searchUser = useCallback(() => {
    setError(null);
    try{
      dispatch(userActions.searchUser(state.searchUser))
    } catch(err) {
      setError(err.message);
    }
  })

  const renderRow = ({item, index}) => {
    return (
      <View>
        <Text>{item.name.first}</Text>
      </View>
    );
  };
  console.log(state.data, 'resdaataaa');
  if (error != null) {
    return (
      <View style={styles.centered}>
        <Text>An error occurred!</Text>
        <TouchableOpacity onPress={() => refreshUser()}>
         <Text>try again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.MainContainer}>
      <View style={styles.search}>
      <Search value={search} onChangeText={() => searchUser()}  />
      </View>
      <FlatList
        data={state.data}
        renderItem={renderRow}
        onRefresh={refreshUser}
        refreshing={refresh}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={loadUser}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'rgb(243,243,248)',
  },
  search: {
    height: 50,
  }
});

export default Home;
