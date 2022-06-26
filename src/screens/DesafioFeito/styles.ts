import styled from 'styled-components/native'

export const Container =styled.View`
    display: 'flex';
    flex-Direction: 'column';
    flex: 1;
    background-Color: '#FEFEFE';
    align-Items: 'center';
    padding: 8;
`;

export const Picture = styled.Image`
    width: 64;
    height: 64;
    margin-Top: 32;
`;

export const Paragraph = styled.Text`
    color: '#252627';
    font-Size: 26;
    font-Weight: '700';
    text-Align: 'center';
    margin-Top: 16;
    margin-Bottom: 40;
`;

export const TextCard = styled.Text`
    width: 230;
    color: '#252627';
    font-Size: 18;
    line-Height: 20;
    font-Weight: '400';
    text-Align: 'left';
`;

export const TextArea = styled.View`
    display: 'flex';
    flex-Direction: 'row';
    align-Items: 'center';
`;

export const LineText = styled.View`
    height: 80;
    width: 4;
    border-Radius: 6;
    background-Color: '#440a67';
    margin-Right: 8;
`;

export const Card = styled.Pressable`
    display: 'flex';
    flex-Direction: 'column';
    min-Height: 150;
    width: '100%';
    background-Color: '#F2F2F2';
    box-Shadow: '-4px 4px 4px -2px rgba(0, 0, 0, 0.19)';
    border-Radius: 12;
    margin-Bottom: 16;
    padding: 20;
`;

export const ButtonArea = styled.View`
    display: 'flex';
    flex-Direction: 'row';
    justify-Content: 'flex-end';
    align-Items: 'center';
    margin-Top: 19;
`;

export const TextButton = styled.Text`
    color: '#996DA8';
    font-Size: 18;
    line-Height: 18;
    font-Weight: '500';
`;

export const ButtonImage = styled.Image`
    margin-Left: 8;
    width: 18;
    height: 18;
`;

//styles Modal

export const CenteredView = styled.View`
    flex: 1;
`;

export const ModalView = styled.View`
    flex: 1;
    display: 'flex';
    flex-Direction: 'column';
    background-Color: 'white';
    padding: 35;
`;

export const ButtonClose = styled.Pressable`
    position: 'absolute';
    right: 32;
    top: 32;
`;

export const CloseImage = styled.Image`
    height: 13;
    width: 13;
`;

export const ModalText = styled.Text`
    margin-Bottom: 15;
    text-Align: 'center';
`;

export const TextModal = styled.Text`
    text-Align: 'left';
    margin-Top: 30;
    font-Size: 16;
    color: '#252627';
`;

export const ButtonModal = styled.Pressable`
    background-Color: '#996DA8';
    border-Radius: 20;
    padding: 12;
    margin-Top: 40;
`;

export const ButtonModalText = styled.Text`
    color: '#FFF';
    font-Weight: '700';
    font-Size: 18;
    text-Align: 'center';
`;