const Announcement = ({title, content}) => {
	return (
		<div className="max-w-['200px']">
			<h2 className="text-xl font-bold py-3 ">{title}</h2>
			<div>
				<div className="py-4">
					<div className="flex flex-row items-center gap-2 font-semibold py-1">{content}</div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Announcement;
