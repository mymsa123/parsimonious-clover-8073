import React, { useState } from 'react';
import {
    Box,
    Stack,
    Text,
    Input,
    IconButton,
    Image,
    Flex,
    Button,
    useToast
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { auto } from '@popperjs/core';

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'bold'} fontSize={'2xl'} mb={2} color={"orange"}>
            {children}
        </Text>
    );
};

const isEmailValid = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

export default function Footer() {
    const toast = useToast();
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = () => {
        if (isEmailValid(email)) {
            toast({
                title: 'Subscribed!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            setEmail('');
        } else {
            toast({
                title: 'Invalid Email',
                description: 'Please enter a valid email address.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (

        <Box bg="#00525d">
            <Flex justifyContent="space-around" p={10} color="white">
                <Stack spacing={0.5}>
                    <Box margin={auto}>
                        <Image src="/Images/MediCare Logo.png" alt="Medicare" width={"80px"} borderRadius="md"/>
                    </Box>
                    <Text fontSize={'lg'}>268, Elizabeth Road, Broklyn</Text>
                    <Text fontSize={'lg'}>USA</Text>
                    <Text fontSize={'lg'}>© 2024 @MediCare. All rights reserved</Text>

                    <Flex gap={5}>
                        <Button rounded={"full"}>
                            <FaTwitter />
                        </Button>
                        <Button rounded={"full"}>
                            <FaYoutube />
                        </Button>
                        <Button rounded={"full"}>
                            <FaInstagram />
                        </Button>
                    </Flex>
                </Stack>

                <Box>
                    <ListHeader>Opening Hours</ListHeader>
                    <Flex gap="6">
                        <Box>
                            <Box>Mon - Tue</Box>
                            <Box>Wed - Thur</Box>
                            <Box>Fri - Sat</Box>
                            <Box>Sunday</Box>
                        </Box>
                        <Box>
                            <Box>8 AM - 5 PM</Box>
                            <Box>9 AM - 6 PM</Box>
                            <Box>8 AM - 5 PM</Box>
                            <Box>Emergency Only</Box>
                        </Box>
                    </Flex>
                </Box>

                <Box>
                    <ListHeader>Contact Us</ListHeader>
                    <Box>+2819 (4613) 2930</Box>
                    <Box>support@medicare.com</Box>
                </Box>

                <Box>
                    <ListHeader>Support</ListHeader>
                    <Box>Help Center</Box>
                    <Box>Terms of Service</Box>
                    <Box>Legal</Box>
                    <Box>Privacy Policy</Box>
                </Box>

                <Stack>
                    <ListHeader>Subscribe To Our Newsletter</ListHeader>
                    <Stack direction={'row'}>
                        <Input
                            type="email"
                            placeholder='Your email address'
                            bg="#add8e6"
                            color="black"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <IconButton
                            bg="green"
                            color="white"
                            _hover={{
                                bg: 'green.600',
                            }}
                            aria-label="Subscribe"
                            icon={<BiMailSend />}
                            onClick={handleSubscribe}
                        />
                    </Stack>
                </Stack>
            </Flex>
        </Box>
    )
}