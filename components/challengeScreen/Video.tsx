import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Video({ video }: any) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  if (video === undefined) {
    return <View />;
  }

  const renderVideo = video.map((vid: { id: { videoId: string | undefined; }; }) => (
    <YoutubePlayer
      key={Math.random()}
      height={220}
      play={playing}
      videoId={vid.id.videoId}
      onChangeState={onStateChange}
    />
  ));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Démonstration video :</Text>
      {renderVideo}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
  },
});
