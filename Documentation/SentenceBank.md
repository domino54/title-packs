SentenceBank.Script.txt
-----------------------

This library contains all sentences translated by third-party users in their native languages. Used exclusively by [Translations]() library.

### Functions

#### GetScriptVersion
* Returns Text containing actual script version ("yyyy-mm-dd")

#### GetScriptName
* Returns Text containing actual script name ("SentenceBank.Script.txt")

#### GetIndex
* Returns Integer ID of specified input english message, if exists. If not, returns 0.
* Parameters:
	* Text _Message: look for ID of this message

#### GetGerman
* Returns german sentence from specified ID, if exists. If not, returns "".
* Parameters:
	* Integer _Index: look for message with this ID

#### GetFrench
