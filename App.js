import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, ImageBackground, Text, Button } from 'react-native';

export default class ContadorAgua extends Component{

  constructor(props){
    super(props);
    this.state = {consumido: 0, status: 'Bad', pct: 0};

    this.addCopo = this.addCopo.bind(this);
    this.atualizar = this.atualizar.bind(this);
    this.resetar = this.resetar.bind(this);
  }

  atualizar(){
    let s = this.state;
    s.pct = Math.round(((s.consumido/2000)*100));
    if (s.pct >= 100) {
      s.status = 'Good';
    }
    else{
      s.status = 'Bad';
    }

    this.setState(s);
  }

  addCopo(){
    let s = this.state;
    s.consumido += 200;

    this.setState(s);
    this.atualizar();
  }

  resetar() {
    let s = this.state;
    s.consumido = 0;
    s.status = 'Bad';
    s.pct = 0;

    this.setState(s);
    this.atualizar();
  }

  render() {
    return (
      <View style={styles.body}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FFFFFF" translucent={true} />
        <ImageBackground source={require('./images/waterbg.png')} style={styles.bgimage}>
        <View>
            <View style={styles.infoArea}>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Daily Goal</Text>
                <Text style={styles.areaDado}>2000 mL</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Consumed</Text>
                <Text style={styles.areaDado}>{this.state.consumido} mL</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Status</Text>
                <Text style={styles.areaDado}>{this.state.status}</Text>
              </View>
            </View>
            <View style={styles.pctArea}>
              <Text style={styles.pctText}>{this.state.pct}%</Text>              
            </View>
            <View style={styles.btnArea}>
              <Button title="Drink water (200 mL)" onPress={this.addCopo} />
            </View>
            <View style={styles.btnArea}>
              <Button title="Restart daily goal" onPress={this.resetar} />
            </View>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 20
  },
  bgimage: {
    flex: 1,
    width: null
  },
  infoArea: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 70
  },
  area: {
    flex: 1,
    alignItems: 'center'
  },
  areaTitulo: {
    color: '#45b2fc'
  },
  areaDado: {
    color: '#2b4274',
    fontSize: 15,
    fontWeight: 'bold'
  },
  pctArea: {
    marginTop: 170,
    alignItems: 'center'
  },
  pctText: {
    fontSize: 70,
    color: 'white',
    backgroundColor: 'transparent'
  },
  btnArea: {
    marginTop: 30,
    alignItems: 'center'
  }
});