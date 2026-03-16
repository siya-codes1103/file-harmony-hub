import { MessageSquare, Mail, Bell } from "lucide-react";
import { DeliveryChannel } from "@/types/template";

const channelConfig: Record<DeliveryChannel, { icon: typeof MessageSquare; color: string; label: string }> = {
  WhatsApp: { icon: MessageSquare, color: "text-green-400", label: "WhatsApp" },
  Email: { icon: Mail, color: "text-blue-400", label: "Email" },
  "In-app": { icon: Bell, color: "text-yellow-400", label: "In-app" },
  SMS: { icon: MessageSquare, color: "text-purple-400", label: "SMS" },
};

const ChannelIcon = ({ channel }: { channel: DeliveryChannel }) => {
  const config = channelConfig[channel];
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1 text-xs ${config.color}`}>
      <Icon className="w-3 h-3" />
      {config.label}
    </span>
  );
};

export default ChannelIcon;
