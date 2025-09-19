import styled from 'styled-components/native'

 export const Container = styled.View`
    flex: 1;
    background-color: #F5F6FA;
    padding-top: 40px;
 `
  export const Header = styled.Text`
    font-size: 22px;
    font-weight: bold;
    padding-horizontal: 16px;
    margin-bottom: 10px;
 `
  export const List = styled.View`
    padding-horizontal: 16px;
 `
  export const Card = styled.Pressable`
    flex-direction: row;
    background-color: #FFF;
    border-radius: 12px;
    padding: 12px;
    margin-bottom: 12px;
    elevation: 3;
    shadow-color: #000; 
    shadow-offset: { width: 0; height: 2 };
    shadow-opacity: 0.1;
    shadow-radius: 3px;
  `
  export const Thumbnail = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 8px;
  `
  export const Info = styled.View`
    flex: 1;
    margin-left: 12px;
    justify-content: center;
  `
  export const Title = styled.Text`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
  `
  export const Description = styled.Text`
    font-size: 14px;
    color: #666;
    margin-bottom: 6px;
  `
  export const Price = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #2ECC71;
  `
  export const ListItens = styled.FlatList.attrs({
    contentContainerStyle: {paddingHorizontal: 16}
  })``