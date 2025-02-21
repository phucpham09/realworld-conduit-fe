'use client'
import * as React from 'react'
import { Theme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Chip from '@mui/material/Chip'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

interface MultipleSelectChipProps {
    tagList: { tagid: number; name: string }[]
    handleChange: (event: SelectChangeEvent<string[]>) => void
    tagName: string[]
    theme: Theme
    getStyles: (
        name: string,
        personName: readonly string[],
        theme: Theme
    ) => object
}

const MultipleSelectChip: React.FC<MultipleSelectChipProps> = ({
    tagList,
    handleChange,
    tagName,
    theme,
    getStyles,
}) => {
    return (
        <div>
            <FormControl sx={{ mt: 1, width: '100%' }}>
                <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={tagName}
                    onChange={handleChange}
                    input={
                        <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
                    renderValue={(selected) => (
                        <Box
                            sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}
                        >
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {tagList?.map((tag) => (
                        <MenuItem
                            key={tag.tagid}
                            value={tag.name}
                            style={getStyles(tag.name, tagName, theme)}
                        >
                            {tag.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default MultipleSelectChip
