import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;  
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return(
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Milena Almeida</Text>
                    <Text color="gray.300" fontSize="small">
                        milenaalmeidadev@hotmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Milena Almeida" src="https://github.com/milealmeida.png" />
        </Flex>
    );
}