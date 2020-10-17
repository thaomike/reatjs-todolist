import React from 'react';
import AddItem from './menuBar/AddItem'
import Search from './menuBar/Search';
import Sort from './menuBar/Sort'
import styled from 'styled-components'

function Menu(props) {
  return (
    <MenuBar>
      <Search/>
      <AddItem
        isAddNew = {props.isAddNew}
        setIsAddNew = {props.setIsAddNew}
        onCreatTask = {props.onCreatTask}
        length = {props.length}
      />
      <Sort/>
    </MenuBar>
  );
}

export default Menu;

const MenuBar = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: auto;
`;

// const AddItem, Sort, Search = styled.div`
//   width:100%;
// `
  

