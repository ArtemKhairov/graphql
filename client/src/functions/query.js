import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      username,id,age
    }
  }
`;


export const CREATE_USER=gql`
  mutation createUser($input:UserInput){
    createUser(input:$input){
      id,username,age
    }

  }
`


export const GET_ONE_USER=gql`
  query getUser($id:ID){
    getUser(id:$id){
      id,username,age
    }

  }
`