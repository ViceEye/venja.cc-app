import "../styles/editor.scss"

import Color from "@tiptap/extension-color"
import Highlight from "@tiptap/extension-highlight"
import Image from "@tiptap/extension-image"
import ListItem from "@tiptap/extension-list-item"
import TextStyle from "@tiptap/extension-text-style"
import Typography from "@tiptap/extension-typography"
import { EditorProvider, useCurrentEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

import styled from "@emotion/styled"
import CodeIcon from "@mui/icons-material/Code"
import ColorLensIcon from "@mui/icons-material/ColorLens"
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import FormatTextdirectionLToRIcon from "@mui/icons-material/FormatTextdirectionLToR"
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule"
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions"
import ImageIcon from "@mui/icons-material/Image"
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS"

import { IconButton } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"

import AdvanceInput from "./AdvanceInput"

const EditorMenuButton = styled(IconButton)`
  border-radius: 10px;
`

const Heading = styled.span`
  font-size: 21px;
`

const MenuBar = () => {
  const { editor } = useCurrentEditor()
  if (!editor) return null

  return (
    <>
      <Grid container columns={{ xs: 8, sm: 10, md: 12, lg: 16 }}>
        <Grid xs={1}>
          {/* Bold */}
          <EditorMenuButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            <FormatBoldIcon />
          </EditorMenuButton>
        </Grid>
        <Grid xs={1}>
          {/* Italic */}
          <EditorMenuButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            <FormatItalicIcon />
          </EditorMenuButton>
        </Grid>
        <Grid xs={1}>
          {/* Strike */}
          <EditorMenuButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            <StrikethroughSIcon />
          </EditorMenuButton>
        </Grid>
        <Grid xs={1}>
          {/* H1 */}
          <EditorMenuButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
          >
            <Heading>H1</Heading>
          </EditorMenuButton>
        </Grid>
        <Grid xs={1}>
          {/* H2 */}
          <EditorMenuButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
          >
            <Heading>H2</Heading>
          </EditorMenuButton>
        </Grid>
        <Grid xs={1}>
          {/* H3 */}
          <EditorMenuButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
          >
            <Heading>H3</Heading>
          </EditorMenuButton>
        </Grid>
        <Grid xs={1}>
          {/* Paragraph */}
          <EditorMenuButton
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive("paragraph") ? "is-active" : ""}
          >
            <FormatTextdirectionLToRIcon />
          </EditorMenuButton>
        </Grid>
        <Grid xs={1}>
          {/* Code */}
          <EditorMenuButton
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            className={editor.isActive("code") ? "is-active" : ""}
          >
            <CodeIcon />
          </EditorMenuButton>
        </Grid>
        <Grid xs={1}>
          {/* Bullet List */}
          <EditorMenuButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
          >
            <FormatListBulletedIcon />
          </EditorMenuButton>
        </Grid>
        <Grid xs={1}>
          {/* Order List */}
          <EditorMenuButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}
          >
            <FormatListNumberedIcon />
          </EditorMenuButton>
        </Grid>
        <Grid xs={1}>
          {/* Code Block */}
          <EditorMenuButton
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive("codeBlock") ? "is-active" : ""}
          >
            <IntegrationInstructionsIcon />
          </EditorMenuButton>
        </Grid>
        <Grid xs={1}>
          {/* Blockquote */}
          <EditorMenuButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}
          >
            <FormatQuoteIcon />
          </EditorMenuButton>
        </Grid>
        <Grid xs={1}>
          {/* Horizontal Rule */}
          <EditorMenuButton onClick={() => editor.chain().focus().setHorizontalRule().run()}>
            <HorizontalRuleIcon />
          </EditorMenuButton>
        </Grid>
        <Grid xs={1}>
          {/* Color */}
          <AdvanceInput
            inputProps={{
              type: "color",
              onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                editor.chain().focus().setColor(event.target.value).run()
              },
            }}
            Icon={ColorLensIcon}
          />
        </Grid>
        <Grid xs={1}>
          {/* Highlight */}
          <AdvanceInput
            inputProps={{
              type: "color",
              onChange: (event) => {
                if (event.target.value === "#ffffff") {
                  editor.chain().focus().unsetHighlight().run()
                } else {
                  editor.chain().focus().toggleHighlight({ color: event.target.value }).run()
                }
              },
            }}
            Icon={FormatColorFillIcon}
          />
        </Grid>
        <Grid xs={1}>
          {/* Image */}
          <AdvanceInput
            inputProps={{
              onChange: (event) => {
                const files = event.target.files
                if (files) {
                  if (!files[0].type.startsWith("image/")) {
                    window.alert("Not an image file")
                    return
                  }
                  const reader = new FileReader()
                  reader.onloadend = () => {
                    editor
                      .chain()
                      .focus()
                      .setImage({ src: reader.result as string })
                      .run()
                  }
                  reader.readAsDataURL(files[0])
                }
              },
              type: "file",
            }}
            Icon={ImageIcon}
          />
        </Grid>
      </Grid>
    </>
  )
}

const extensions = [
  Typography,
  TextStyle,
  Image,
  Highlight.configure({ multicolor: true }),
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
]

interface TipTapProps {
  content?: string
  setContent?: (content: string) => void
}

const TipTap: React.FC<TipTapProps> = ({ content, setContent }) => {
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={content}
      children={undefined}
      onUpdate={({ editor }) => {
        console.log(editor.getText())
        console.log(editor.getJSON())
        if (setContent) {
          setContent(editor.getHTML())
        }
      }}
    />
  )
}

export default TipTap
