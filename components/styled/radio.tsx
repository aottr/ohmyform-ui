import {Radio} from 'antd'
import {RadioProps} from 'antd/lib/radio/interface'
import React from 'react'
import styled from 'styled-components'
import {FormDesignFragment} from '../../graphql/fragment/form.fragment'

interface Props extends RadioProps {
  design: FormDesignFragment
}

const Field = styled(Radio)`
  color: ${props => props.design.colors.answerColor};
  border-color: ${props => props.design.colors.answerColor};
  background: none;
  
  .ant-radio {
    .ant-radio-inner {
      border-color: ${props => props.design.colors.answerColor};
      
      &::after {
        background: ${props => props.design.colors.answerColor};
      }
    }
    
    &::after {
      border-color: ${props => props.design.colors.answerColor};
    }
  }
  
  .anticon {
    color: ${props => props.design.colors.answerColor};
  }
`

export const StyledRadio: React.FC<Props> = ({children, ...props}) => {
  return (
    <Field {...props}>{children}</Field>
  )
}
