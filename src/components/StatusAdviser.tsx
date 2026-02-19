export interface StatusAdviserProps {
  message: string;
  success: boolean;
}

const StatusAdviser = (props: StatusAdviserProps) => {
  return (
    <div className={"status-adviser--" + (props.success ? "success" : "error")}>
      <p>{props.message}</p>
    </div>
  );
};

export default StatusAdviser;
