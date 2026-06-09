import { View } from "react-native";
import { useNavigate } from "react-router-native";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export function DetailsScreen() {
    const navigate = useNavigate();

    return (
        <View className="flex-1 items-center justify-center gap-4 bg-black px-6">
            <Text className="text-2xl font-semibold text-white">Details</Text>
            <Button variant="secondary" onPress={() => navigate("/")}>
                <Text>Back</Text>
            </Button>
        </View>
    );
}
