import { Heading, Image, Box, Spacer, HStack, Text, Flex, Icon } from "@chakra-ui/react";
import { FaEye, FaBullseye, FaGem } from "react-icons/fa";
import { WhyUs } from "../Components/WhyUs";

export const About = () => {
    return (
        <Box mt={10} mb={10}>
            <Text fontSize="4xl" color="green" fontWeight="600" mb={10} textAlign="center">About Us</Text>
            <Flex w="70%" p={4}
                bg={"#00525D"}
                margin="auto"
                justify="center"
                align="center"
                mt={15} mb={10}
                borderRadius="xl">
                <Image
                    src="https://img.freepik.com/free-photo/doctor-vaccinating-little-girl-that-s-supported-by-her-mother_23-2148755610.jpg?w=360&t=st=1696318148~exp=1696318748~hmac=2f14bf6608c013493a2a763f06dbf6087bf351cf319b3cc9df126c0d3972f5ca"
                    alt="MediCare"
                    w={350} height={450} ml={4}
                    borderRadius="xl"
                />
                <Spacer />
                <Box ml={2} mr={8}>
                    <Box mb={6} width={600} color={"white"}>
                        <HStack spacing={2} mb={2} color={"orange"}>
                            <Icon as={FaEye} boxSize={6} />
                            <Heading as="h1" fontSize="2xl">
                                Our Vision
                            </Heading>
                        </HStack>
                        <Text fontSize="lg">
                            Offering solutions and products that are verifiably effective - that
                            is our vision. Our vision always pushes us to develop and offer high
                            quality solutions and products which can be proven to be effective
                            and efficient in their application.
                        </Text>
                    </Box>

                    <Box mb={6} width={600} color={"white"}>
                        <HStack spacing={2} mb={2} color={"orange"}>
                            <Icon as={FaBullseye} boxSize={6} />
                            <Heading as="h1" fontSize="2xl">
                                Our Mission
                            </Heading>
                        </HStack>
                        <Text fontSize="lg">
                            Our mission is to always improve the quality of life and the quality of work for all our clients and patients with our work and our solutions. Safety and success of therapies are always our focus.
                        </Text>
                    </Box>

                    <Box mb={6} width={600} color={"white"}>
                        <HStack spacing={2} mb={2} color={"orange"}>
                            <Icon as={FaGem} boxSize={6} />
                            <Heading as="h1" fontSize="2xl">
                                Our Values
                            </Heading>
                        </HStack>
                        <Text fontSize="lg">
                            Clarity, trust, loyalty, pride and respect - these are our values.
                            They have accompanied us since our beginning and will continue to do
                            so in the future. They are the constants which shape our work and our
                            behavior.
                        </Text>
                    </Box>
                </Box>
            </Flex>

            <Box mb={20}>
                <Text fontSize="4xl" color="green" fontWeight="600" mb={10} textAlign="center">Why Choose Us</Text>
                <WhyUs />
            </Box>
        </Box>

    )
}
