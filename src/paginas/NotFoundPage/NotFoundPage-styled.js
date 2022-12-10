import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function NotFoundPage(props) {
    const {mudaParaHomePage} = props
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Página não encontrada
      </Text>
      <Text color={'gray.500'} mb={6}>
        Não encontramos o que você procura. Talvez essa página não exista.
      </Text>

      <Button onClick={mudaParaHomePage}
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid">
        Ir para Produtos
      </Button>
    </Box>
  );
}