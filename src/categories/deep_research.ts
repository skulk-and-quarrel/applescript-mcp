import { ScriptCategory } from "../types/index.js";

export const deepResearchCategory: ScriptCategory = {
  name: "deep_research",
  description: "Deep research operations",
  scripts: [
    {
      name: "start_deep_research",
      description: "Starts deep research, step 1 where the initial question is posed",
      schema: {
        type: "object",
        properties: {
          question: {
            type: "string",
            description: "The initial question to start deep research with",
          },
        },
        required: ["question"],
      },
      script: (args) => `
        	-- Launch the ChatGPT application
            tell application "ChatGPT"
                activate
            end tell
            
            -- Allow time for the app to launch
            delay 2
            
            tell application "System Events"
                -- Reference the ChatGPT process
                tell process "ChatGPT"
                    --- Start new chat
                    click button 1 of button 2 of toolbar 1 of window "ChatGPT"
                    delay 0.2
                    --- Select GPT-4o
                    click button 1 of button 3 of toolbar 1 of window "ChatGPT"
                    delay 0.2
                    click button 1 of scroll area 1 of group 1 of pop over 1 of button 1 of button 3 of toolbar 1 of window "ChatGPT"
                    delay 0.2
                    --- Activate Deep Research
                    click button 4 of group 2 of splitter group 1 of group 1 of window 1
                    delay 0.2
                    --- Type message		
                    click scroll area 3 of group 2 of splitter group 1 of group 1 of window 1
                    delay 0.2
                    keystroke "${args.question}"
                    -- Send the message
                    -- Example: Press the Enter key to send
                    delay 0.2
                    keystroke return
                end tell
            end tell
            delay 10
            tell application "ChatGPT"
                activate
            end tell
            tell application "System Events"
                tell process "ChatGPT"
                    try
                        tell group 2 of list 1 of list 1 of scroll area 1 of group 2 of splitter group 1 of group 1 of window "ChatGPT"
                            
                            set {xPosition, yPosition} to position
                            set {xSize, ySize} to size
                            --- display dialog xSize
                            --- display dialog ySize
                        end tell
                        -- modify offsets if hot spot is not centered:
                    end try
                end tell
                --- delay 0.5
                --- click at {xPosition + 25, yPosition + ySize - 10}
            end tell
            set clickCommand to "/opt/homebrew/bin/cliclick c:" & xPosition + 25 & "," & yPosition + ySize - 10
            do shell script clickCommand
            tell application "System Events"
              set clipboardContent to the clipboard
            end tell
            return & "Need to answer the following questions: " & clipboardContent
      `,
    },
  ],
};
