import React, { useContext } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import UsersContext from '../context/UsersContext';

export default props => {

    const { state, dispatch } = useContext(UsersContext);

    function confirmUserDelection(user){
        Alert.alert('Excluir usuário', 'Deseja expluir o usuário?', [
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getAction(user){
        return (
            <>
                <ListItem.Chevron
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    iconProps={{name: "edit"}}
                    iconStyle={{fontSize: 25, color: "orange"}}
                />
                <ListItem.Chevron
                    onPress={() => confirmUserDelection(user)}
                    iconProps={{name: 'delete'}}
                    iconStyle={{fontSize: 25, color: "red"}}
                />
            </>
        )
    }

    function getUserItem({ item: user }){
        return (
            <ListItem 
                key={user.id}
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)} 
            >
                <Avatar source={{uri: user.avatarURL}} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                {getAction(user)}
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}