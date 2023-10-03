import { Heading, Box, Text, Flex, Icon, VStack } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

export const WhyUs = () => {
  const whyChooseUsItems = [
    {
      icon: FaCheckCircle,
      title: "High Quality Services",
      description: "We provide top-notch medical services to ensure the well-being of our patients."
    },
    {
      icon: FaCheckCircle,
      title: "Experienced Team",
      description: "Our team consists of highly skilled and experienced medical professionals."
    },
    {
      icon: FaCheckCircle,
      title: "Cutting-edge Technology",
      description: "We utilize the latest technology to offer advanced and effective treatments."
    },
  ];

  return (
    <VStack align="center" spacing={10} mt={15} mb={6}>
      <Flex justify="center" justifyContent="center">
        <Box w="70%" bg="#ADC4CE" p={3} borderRadius="xl">
          <Flex justify="space-between">
            {whyChooseUsItems.map((item, index) => (
              <Box key={index} p={4} m={1} borderWidth="1px" borderColor="#5C469C" borderRadius="md">
                <Flex align="center" mb={2}>
                  <Icon as={item.icon} boxSize={6} color="green" />
                  <Heading as="h2" fontSize="lg" ml={2}>
                    {item.title}
                  </Heading>
                </Flex>
                <Text fontSize="lg">{item.description}</Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </VStack>
  );
};
