import { AlertDialog, Button, Card, Flex, Text } from "@radix-ui/themes";
import React, { useContext } from "react";
import Options from "./Options";
import { useLocation } from "react-router-dom";
import { ContextProvider } from "../Store/Store";

const Questions = ({ options, que, correctAns, index, category }) => {
  const location = useLocation();
  const {deleteQuestion} = useContext(ContextProvider) ; 
  return (
    <Flex direction={"column"} gap={"1"} mt={"5"}>
      <Card>
      <div className=" flex items-center justify-between">
        <h1>
          {index + 1}.{que}
        </h1>
        <div className={`${location.pathname.includes('admin')?'': 'hidden'}`}>
          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <Button color="red">Delete</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content style={{ maxWidth: 450, }}>
              <AlertDialog.Title>Delete Question</AlertDialog.Title>
              <AlertDialog.Description size="2">
                Are you sure, You want to delete?
              </AlertDialog.Description>

              <Flex gap="3" mt="4" justify="end">
                <AlertDialog.Cancel>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <Button onClick={()=>deleteQuestion(que)} variant="solid" color="red">
                    Delete
                  </Button>
                </AlertDialog.Action>
              </Flex>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </div>
      </div>
      {Object.values(options).map((val, i) => (
        <Options option={val} index={i} que={que} />
      ))}
      </Card>
    </Flex>
  );
};

export default Questions;
