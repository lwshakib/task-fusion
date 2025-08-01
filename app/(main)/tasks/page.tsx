import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

type Props = {};

function page({}: Props) {
  return (
    <ResizablePanelGroup direction="horizontal" className="h-screen w-full">
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default page;
