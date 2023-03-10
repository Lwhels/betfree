import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  RefreshControl,
  ImageBackground,
} from 'react-native';
import {AppStyles} from '../AppStyles';
import {Configuration} from '../Configuration';

const API_KEY = 'b9b100b8e33845dab3ba0f41512008bd';
const keyword = 'nba';

export default function NewsScreen({navigation}) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'NBA Media',
    });
  }, []);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    setRefreshing(false);
  };

  if (loading) {
    return (
      <ActivityIndicator
        style={{marginTop: 30}}
        size="large"
        animating={loading}
        color={AppStyles.color.tint}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={fetchNews} />
          }>
          {articles.map((article, index) => (
            <View key={index} style={styles.articleContainer}>
              <ImageBackground
                source={{uri: article.urlToImage}}
                style={styles.image}>
                <Text style={styles.title}>{article.title}</Text>
                <Text style={styles.author}>{article.author}</Text>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: Configuration.home.listing_item.offset,
  },
  articleContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  author: {
    color: '#fff',
    marginBottom: 5,
  },
});
