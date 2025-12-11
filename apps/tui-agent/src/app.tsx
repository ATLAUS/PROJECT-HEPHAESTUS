import React, {useState} from 'react';
import {Box, Text} from 'ink';
import UncontrolledTextInput from 'ink-text-input';

import { AsciiLogo } from './ui/components/AsciiArt.js';

type Props = {
	name: string | undefined;
};

const username: string = process.env['USER'] || process.env['LOGNAME'] || process.env['USERNAME'] || ''

export default function App({name = username}: Props) {
	const [inputText, setInputText] = useState<string>('')
	const [prompt, setPrompt] = useState<string>('');
	const [submitted, setSubmitted] = useState<boolean>(false);

	const handleSubmit = (text: string) => {
		setPrompt(text)
		setSubmitted(true)
	}

	return (
		<Box flexDirection="column" borderStyle="round" borderColor="green">
			<Text>
				{AsciiLogo}
			</Text>
			<Text>
				Welcome {name}.
			</Text>
			{!submitted && (
				<Box>
					<Box marginRight={1} justifyContent="center" alignItems="center">
					<Text>Please input your prompt:</Text>
					</Box>
					<Box borderStyle="round" borderColor="green">
					<UncontrolledTextInput value={inputText} onChange={setInputText} onSubmit={handleSubmit} showCursor={true} placeholder="Enter your prompt here"/>
					</Box>
				</Box>
			)}
			{submitted && <Text>Submitting your prompt...</Text>}
			{prompt && <Text>Your prompt: {prompt}</Text>}
		</Box>
	);
}