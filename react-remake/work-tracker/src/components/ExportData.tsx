import CreateFile from "./FileSaver";

export function exportLocalData() {
    const handleExport = () => {
        CreateFile();
    };

    return (
        handleExport()
    );
}