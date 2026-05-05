import StoreLayout from "@/components/admin/StoreLayout";

export const metadata = {
    title: "SmudgeWears. - Store Dashboard",
    description: "SmudgeWears. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
