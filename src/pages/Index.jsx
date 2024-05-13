import { Container, VStack, Text, Input, Button, List, ListItem, ListIcon } from '@chakra-ui/react';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" mb="8">Todo App</Text>
        <Input
          placeholder="Add a new task"
          value={input}
          onChange={handleInputChange}
          size="lg"
        />
        <Button colorScheme="blue" onClick={handleAddTask} mt="4">Add Task</Button>
        <List spacing={3} mt="8" width="100%">
          {tasks.map((task, index) => (
            <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
              <Text>{task}</Text>
              <ListIcon as={FaCheckCircle} color="green.500" cursor="pointer" onClick={() => handleDeleteTask(index)} />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;