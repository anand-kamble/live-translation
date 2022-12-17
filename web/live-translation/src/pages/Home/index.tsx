import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

const Home = () => {
	const [fileName, setFileName] = useState<string | null>(null);
	const onFileDrop = (acceptedFiles: File[]) => {
		setFileName(acceptedFiles[0].name + ' will be translated soon ...');
	};
	return (
		<>
			<div className="grid grid-cols-2 gap-4 w-full h-96 px-10">
				<Dropzone onDrop={(acceptedFiles) => onFileDrop(acceptedFiles)}>
					{({ getRootProps, getInputProps }) => (
						<section className="h-full">
							<div
								{...getRootProps()}
								className="text-gray-100 bg-slate-900 flex items-center justify-center border-2 border-slate-700 rounded-md h-full"
							>
								<input {...getInputProps()} />
								<div>
									<p className="text-gray-100">
										Drag 'n' drop some files here, or click to select files
									</p>
								</div>
							</div>
						</section>
					)}
				</Dropzone>
				<div
					className={`bg-slate-900 border-2 border-slate-700 rounded-md px-4 py-4`}
				>
					<p
						className={fileName !== null ? 'text-slate-200' : 'text-slate-600'}
					>
						{fileName !== null ? fileName : 'Output will be here...'}
					</p>
				</div>
			</div>
		</>
	);
};

export default Home;
