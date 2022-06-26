import styled from 'styled-components/native'

export const Container = styled.View`
    display: 'flex';
    flex-direction: 'column';
    flex: 1;
    background-color: '#FEFEFE';
    align-items: 'center';
    padding: 8;
`;

export const Paragraph = styled.Text`
    color: '#440A67';
    font-size: 36;
    width: 188;
    font-weight: '700';
    text-align: 'center';
    margin-top: 40;
    margin-bottom: 40;
`;

export const Picture = styled.Image`
    width: 64;
    height: 64;
    margin-top: 32;
`;

export const TextCard = styled.Text`
    color: '#252627';
    font-size: 18;
    line-height: 25;
    font-weight: '400';
    text-align: 'left';
`;

export const InputEmail = styled.Input `
     margin-top: 20;
    margin-Bottom: 100;
    border-Width: 1;
    border-Radius: 3;
`;

// styles Modal

export const ModalView = styled.View`
    flex: 1;
    display: 'flex';
    justify-Content: 'space-between';
    flex-Direction: 'column';
    background-Color: 'white';
    padding: 35;
`;

export const ParagraphModal = styled.text`
    color: '#440A67';
    font-Size: 36;
    font-Weight: '700';
    text-Align: 'center';
    margin-Bottom: 40;
`;

export const PictureModal = styled.Image`
    width: 312;
    height: 312;
`;